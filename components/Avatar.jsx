import Image from "next/image";

const Avatar = () => {
  return (
    <div className="hidden xl:flex xl:max-w-none pointer-events-none select-none w-full h-full">
      <Image
        src="/profile-photo.jpeg"
        alt="Rakesh Syal"
        width={737}
        height={678}
        className="translate-z-0 w-full h-full object-contain object-bottom"
        priority
      />
    </div>
  );
};

export default Avatar;
