interface IOneImageModalProps {
  item: string;
}

const OneImageModal: React.FC<IOneImageModalProps> = ({ item }) => {
  return (
    <div>
      <img src={item} alt="" />
    </div>
  );
};

export default OneImageModal;
