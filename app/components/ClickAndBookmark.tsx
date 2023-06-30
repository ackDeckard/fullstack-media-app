import { doc, getDoc, updateDoc } from "firebase/firestore";
import { database } from "../firebase/firebase";
import { useContext } from "react";
import { DataContext } from "../context/DataFetchingContext";
import Image from "next/image";

type idProps = {
  id: string;
  isBookmarked: boolean;
};

const ClickAndBookMark = ({ id, isBookmarked }: idProps) => {
  const { updateData } = useContext(DataContext);

  const updateItem = async () => {
    try {
      const bookmarkRef = doc(database, "items", id);
      const bookmarkSnap = await getDoc(bookmarkRef);
      if (bookmarkSnap.exists()) {
        const bookmarkData = bookmarkSnap.data();
        const currentStatus = bookmarkData.isBookmarked;

        await updateDoc(bookmarkRef, {
          isBookmarked: !currentStatus,
        });

        const updatedItem = {
          id,
          ...bookmarkData,
          isBookmarked: !currentStatus,
        };

        updateData(updatedItem);
      }
    } catch (error) {
      console.error("Error updating item:", error);
    }
  };

  return (
    <div
      className="absolute right-4 top-4 flex h-8 w-8 cursor-pointer items-center justify-center rounded-full bg-white/30"
      onClick={() => updateItem()}
    >
      {isBookmarked ? (
        <Image
          src="/icon-bookmark-full.svg"
          width={0}
          height={0}
          alt=""
          className="h-4 w-4"
        ></Image>
      ) : (
        <Image
          src="/icon-bookmark-empty.svg"
          width={0}
          height={0}
          alt=""
          className="h-4 w-4"
        ></Image>
      )}
    </div>
  );
};
export default ClickAndBookMark;
