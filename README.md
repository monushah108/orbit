# <div style="display:flex; align-items:center; gap:5px;"> Orbit <h1> </h1> <img src='./public/img/orbit.png' width="50px" height="50px"></div>

Orbit is a real-time messaging and video calling platform inspired by modern communication tools. It enables users to create servers, channels, and private conversations to collaborate and communicate seamlessly.

## ✨ Features

- 🔐 Authentication and authorization
- 💬 Real-time messaging using Socket.IO
- 📹 Video and voice calling
- 👥 Server and channel management
- 🤝 Friend system
- 🔔 Notification system
- 📂 Media sharing
- 📝 Message editing and deletion
- 💭 Reply to messages
- 🎨 Smooth animations with Framer Motion
- 🌙 Modern UI built with Shadcn UI
- ⚡ Fast client-side routing with TanStack Router

---

# 🛠 Tech Stack

### Frontend

- React
- TypeScript
- TanStack Router
- Redux Toolkit
- Shadcn UI
- Framer Motion
- Socket.IO Client

### Backend

- Node.js
- Express.js
- MongoDB
- Mongoose
- Socket.IO
- Zod

---

# 📦 Database Design

Orbit follows a relational document design in MongoDB.

## User

Stores user information.

```text
User
│
├── name
├── nickName
├── email
├── password
├── picture
├── publicId
├── skills[]
├── bio
└── deleted
```

---

## Server

Represents a community/workspace created by users.

```text
Server
│
├── name
├── picture
├── pictureId
└── ownerId → User
```

---

## ServerMember

Maintains membership and permissions inside servers.

```text
ServerMember
│
├── serverId → Server
├── userId → User
└── role
    ├── ADMIN
    ├── MODERATOR
    └── MEMBER
```

---

## Channel

Channels belong to servers.

```text
Channel
│
├── type
│   ├── GROUP
│   └── PRIVATE
├── name
├── category
│   ├── TEXT
│   └── VOICE
└── serverId → Server
```

---

## Chat

Represents text or voice conversations.

```text
Chat
│
├── type
│   ├── DM
│   ├── GROUP
│   └── PRIVATE
├── name
├── desc
├── category
│   ├── TEXT
│   └── VOICE
└── channelId → Channel
```

---

## ChatMember

Stores members participating in a chat.

```text
ChatMember
│
├── ChatId → Chat
├── userId → User
└── joinedAt
```

---

## Message

Stores conversation messages.

```text
Message
│
├── senderId → User
├── ChatId → Chat
├── content
├── repliedId → Message
├── isEdited
└── isDeleted
```

---

## Friend

Maintains user relationships.

```text
Friend
│
├── userId → User
├── friendId → User
├── status
│   ├── accept
│   ├── block
│   └── mute
└── joinedAt
```

---

## Media

Stores uploaded media information.

```text
Media
│
├── fileUrl
├── fileType
├── fileName
├── fileSize
└── uploadedAt
```

---

## Notification

Handles friend requests and other notifications.

```text
Notification
│
├── sender → User
├── receiver → User
├── status
│   ├── pending
│   ├── accepted
│   ├── rejected
│   └── seen
└── createdAt
```

---

# Database Relationship

```text
User
 │
 ├── owns ─────────────► Server
 │                          │
 │                          ▼
 │                     ServerMember
 │                          │
 │                          ▼
 │                       Channel
 │                          │
 │                          ▼
 │                         Chat
 │                          │
 │               ┌──────────┴──────────┐
 │               ▼                     ▼
 │         ChatMember               Message
 │                                       │
 │                                       ▼
 │                                  Reply Message
 │
 ├────────────► Friend
 │
 └────────────► Notification
```

---

# Real-Time Communication

Orbit uses Socket.IO for:

- Live messaging
- Typing indicators
- Message updates
- Presence detection
- Voice and video call signaling
- Real-time notifications

---

# Future Improvements

- Screen sharing
- Group video calls
- Message reactions
- Threaded conversations
- AI-powered assistant
- End-to-end encryption

---

## Built With ❤️ Using MERN Stack
