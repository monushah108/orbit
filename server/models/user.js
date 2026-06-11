import { model, Schema } from "mongoose";
import bcrypt from "bcrypt";

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      minLength: [
        3,
        "name field should a string with at least three characters",
      ],
    },
    nickName: {
      type: String,
      default: "",
    },
    email: {
      type: String,
      required: true,
      unique: true,
      match: [
        /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$/,
        "please enter a valid email",
      ],
    },
    password: {
      type: String,
      required: true,
      minLength: 4,
    },
    picture: {
      type: String,
      default:
        "https://static.vecteezy.com/system/resources/previews/002/318/271/non_2x/user-profile-icon-free-vector.jpg",
    },

    publicId: {
      type: String,
      default: null,
    },

    skills: [String],

    bio: {
      type: String,
      default: "Hey there i am new here !!",
    },

    deleted: {
      type: Boolean,
      default: false,
    },
  },
  {
    strict: "throw",
  },
);

userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  this.password = await bcrypt.hash(this.password, 12);
  this.nickName = `@${this.name}-${crypto.randomUUID().substring(1, 6)}`;
});

userSchema.methods.comparePassword = async function (candidatePassword) {
  return await bcrypt.compare(candidatePassword, this.password);
};

const User = model("User", userSchema);

export default User;
