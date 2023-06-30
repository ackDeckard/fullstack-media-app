"use client";
import { collection, addDoc } from "firebase/firestore";
import { database } from "../firebase/firebase";

type PropsType = {
  title: string;
  image: string;
  year: number;
  category: string;
  rating: number;
  isBookmarked: boolean;
  isTrending: boolean;
};

const AddDataFirebase = () => {
  // const [item, setitem] = useState();

  const AddItems = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    async (item: PropsType) => {
      await addDoc(collection(database, "items"), {
        title: item.title,
        image: item.image,
        year: item.year,
        category: item.category,
        rating: item.rating,
        isBookmarked: item.isBookmarked,
        isTrending: item.isTrending,
      });
    };
  };

  return (
    <div className="h-10 bg-white">
      <button onClick={AddItems}>Send data</button>
    </div>
  );
};

export default AddDataFirebase;
