interface Message {
    text: string;
  
    createdAt: admin.firestore.Timestamp;
    user: {
      name: string;
      email: string;
      avatar: string;
    };
}