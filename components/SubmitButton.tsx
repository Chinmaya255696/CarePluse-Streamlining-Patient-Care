import React from "react";
import { Button } from "@/components/ui/button";
import Image from 'next/image';
import clsx from 'clsx';

interface ButtonProps {
  isLoading?: boolean;
  className?: string;
  children: React.ReactNode;
}

const SubmitButton = ({ isLoading, className, children }: ButtonProps) => {
  return (
    <Button
      type="submit"
      disabled={isLoading}
    //   className={clsx("shad-promary-btn w-full", className)}
       className={className ?? "shad-primary-btn w-full"}
    >
      {isLoading ? (
        <div className="flex items-center gap-4">
          <Image
            src="/assets/icons/loader.svg"
            alt="loader"
            width={24}
            height={24}
            className="animate-spin"
          />
          Loading....
        </div>
      ) : (
        children
      )}
    </Button>
  );
};

export default SubmitButton;


// import React from "react";
// import { Button } from "@/components/ui/button";
// interface ButtonProps {
//   isLoading?: boolean;
//   classname?: string;
//   children: React.ReactNode;
// }
// import Image from 'next/image';


// const SubmitButton = ({ isLoading, className, children }: ButtonProps) => {
//   return (
//     <Button
//       type="submit"
//       disabled={isLoading}
//       className={className ?? "shad-promary-btn w-full"}
//     >
//       {isLoading ? (
//         <div className="flex items-center gap-4">
//           <Image
//             src="/assets/icons/loader.svg"
//             alt="loader"
//             width={24}
//             height={24}
//             className="animate-spin"
//           />
//           Loading ....
//         </div>
//       ) : (
//         children
//       )}
//     </Button>
//   );
// };

// export default SubmitButton;
