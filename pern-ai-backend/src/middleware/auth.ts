// import { clerkClient, ClerkClient ,AuthObject} from "@clerk/express";
// import { Request,Response,NextFunction } from "express";


// // import type { AuthObject } from "@clerk/clerk-sdk-node";

// declare namespace Express {
//   export interface Request {
//     auth: () => Promise<AuthObject & { has: (args: { plan: string }) => Promise<boolean> }>;
//     plan?: "free" | "premium";
//     free_usage?: number;
//   }
// }

// export const auth = async (req:Request,res:Response,next:NextFunction)=>{
//     try {
//         const {userId,has}=await req.auth();
//         const hasPremiumPlan = await has({plan:'premium'});
        
//         const user = await clerkClient.users.getUser(userId);
//         if(!hasPremiumPlan && user.privateMetadata.free_usage){
//             req.free_usage=user.privateMetadata.free_usage
//         }else{
//             await clerkClient.users.updateUserMetadata(userId,{
//                 privateMetadata:{
//                     free_usage:0
//                 }
//             })
//             req.free_usage=0;
//         }
//         req.plan= hasPremiumPlan? 'premium': 'free';
//         next();
//     } catch (error) {
//         res.json({success:false,message:error.message})
//     }
// }


import { clerkClient } from "@clerk/express";
import { Request, Response, NextFunction } from "express";

export const auth = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { userId, has } = await req.auth();
    const hasPremiumPlan = await has({ plan: "premium" });

    const user = await clerkClient.users.getUser(userId);

    if (!hasPremiumPlan && user.privateMetadata.free_usage != null) {
      req.free_usage = Number(user.privateMetadata.free_usage);
    } else {
      await clerkClient.users.updateUserMetadata(userId, {
        privateMetadata: {
          free_usage: 0,
        },
      });
      req.free_usage = 0;
    }

    req.plan = hasPremiumPlan ? "premium" : "free";
    next();
  } catch (error: any) {
    res.status(401).json({ success: false, message: error.message });
  }
};
