import { Resolver, Query, Mutation, Args, Ctx } from "type-graphql";
import { User, UserModel } from "../../entities/user-entity";
import { LoginAgruments } from "./login-arguments";
import { Context } from "./context";
import { UserInputError, AuthenticationError } from "apollo-server-core";
import bcryptjs from "bcryptjs";
import { getToken } from "./token";

@Resolver()
export class AuthResolver {

    @Query((returns) => User)
    async currentUser(@Ctx() ctx: Context): Promise<User> {
      if(!ctx.user){
        throw new AuthenticationError('user_not_authemticated')
      }
      return await UserModel.findById(ctx.user._id);
    }

  @Mutation((returns) => String)
  async login(@Args() { email, password }: LoginAgruments){
      
    const user = await UserModel.findOne({ email });
    if (!user) {
      throw new UserInputError("Wrong email or password");
    }
    const isPasswordValid = await bcryptjs.compare(password, user.password);
    if (!isPasswordValid) {
      throw new UserInputError("Wrong email or password");
    }

    user.lastLogin = Date.now();
    await user.save();
    return getToken(user._id, user.roles);
  }
}

// tsbe_03.mp4 1.01.57