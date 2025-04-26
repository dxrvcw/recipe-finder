import Image from 'next/image';

export const Loader = ({ size = 32 }: { size?: number }) => {
  return (
    <div className="flex justify-center items-center ">
      <Image
        src="/icons/loader.svg"
        alt="Loading..."
        className="animate-spin"
        width={size}
        height={size}
      />
    </div>
  );
};
