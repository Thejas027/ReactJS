const initialFriends = [
  {
    id: 118836,
    name: "Clark",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -7,
  },
  {
    id: 933372,
    name: "Sarah",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
  },
  {
    id: 499476,
    name: "Anthony",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
];

export default function App() {
  return (
    <div>
      <Members />
      <NewMember />
      <BillSplit />
    </div>
  );
}

function Members() {
  return (
    <div className="form">
      <h2>Thejas</h2>
    </div>
  );
}

function NewMember() {
  return (
    <div>
      <h4>New Name</h4>
    </div>
  );
}

function BillSplit() {
  return (
    <div>
      <h1>Split Bill </h1>
    </div>
  );
}
