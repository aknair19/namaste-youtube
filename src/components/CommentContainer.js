import React from "react";

const commentsData = [
  {
    id: 1,
    name: "Joe",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ",
    replies: [
      {
        id: 2,
        name: "Joe",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ",
      },
      {
        id: 3,
        name: "Joe",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ",
        replies: [],
      },
    ],
  },
  {
    id: 4,
    name: "Joe",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ",
    replies: [],
  },
  {
    id: 5,
    name: "Joe",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ",
    replies: [
      {
        id: 6,
        name: "Joe",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ",
        replies: [],
      },
      {
        id: 7,
        name: "Joe",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ",
        replies: [],
      },
    ],
  },
  {
    id: 8,
    name: "Joe",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ",
    replies: [],
  },
  {
    id: 9,
    name: "Joe",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ",
    replies: [
      {
        id: 10,
        name: "Joe",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ",
        replies: [],
      },
      {
        id: 11,
        name: "Joe",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ",
        replies: [],
      },
    ],
  },
  {
    id: 12,
    name: "Joe",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ",
    replies: [],
  },
  {
    id: 13,
    name: "Joe",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ",
    replies: [],
  },
  {
    id: 14,
    name: "Joe",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ",
    replies: [],
  },
];

const CommentsContainer = () => {
  return (
    <div className="m-5 p-2 space-y-1">
      <h1 className="text-lg font-semibold">Comments</h1>
      <CommentsList comments={commentsData} />
    </div>
  );
};
const CommentsList = ({ comments }) => {
    console.log(comments)
  return (
    <div className="space-y-2">
      {comments.map((comment) => (
        
        <div >
          <Comments key={comment.id} data={comment} />
          
        </div>
      ))}
    </div>
  );
};

const Comments = ({ data }) => {
  const { name, text, replies } = data;
  return (
    <div className="flex space-x-1 bg-gray-100 rounded-sm showdow-sm">
      <div>
        <img
          src="https://imgs.search.brave.com/X3np3vpAK7iJ-ymiqxB8GKvAUfb1YA3_5znygk-l5O8/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvcHJl/dmlld3MvMDAwLzU1/MC83MzEvb3JpZ2lu/YWwvdXNlci1pY29u/LXZlY3Rvci5qcGc"
          alt="user-icon"
          className="w-8 h-8"
        />
      </div>
      <div className="flex flex-col ">
        <h1 className="font-bold">{name}</h1>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default CommentsContainer;
