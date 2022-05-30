/*
 * This Java source file was generated by the Gradle 'init' task.
 */
package com.revature;

import com.revature.controllers.ReimbursementController;
import com.revature.controllers.UserController;
import com.revature.dao.IReimbursementDao;
import com.revature.dao.IUserDao;
import com.revature.dao.ReimbursementDaoJDBC;
import com.revature.dao.UserDaoJDBC;
import com.revature.exceptions.DuplicateUsernameException;
import com.revature.exceptions.PasswordIncorrectException;
import com.revature.exceptions.UserNotFoundException;
import com.revature.exceptions.UsernameOrEmailIncorrectException;
import com.revature.models.Reimbursement;
import com.revature.services.ReimbursementService;
import com.revature.services.UserService;
import io.javalin.Javalin;

import static io.javalin.apibuilder.ApiBuilder.*;

public class Driver
{
    public static void main(String[] args) {

        IUserDao ud = new UserDaoJDBC();
        UserService us = new UserService(ud);
        UserController uc = new UserController(us);

        IReimbursementDao rDao = new ReimbursementDaoJDBC();
        ReimbursementService rs = new ReimbursementService(rDao);
        ReimbursementController rc = new ReimbursementController(rs);

        Javalin server = Javalin.create(config -> {
            config.enableCorsForAllOrigins();
        });

        server.routes(()->{
            path("user",()->{
                post("/register",uc.handleRegister);
                post("/login",uc.handleLogin);
                get("/logout",uc.handleLogout);
                get("/accountInfo/{username}",uc.handleAccountInfo);
                get("/allAccountInfo",uc.handleAllAccountInfo);
                post("/updateInfo",uc.handleUpdateUserInfo);
            });
            path("reimbursement",()->{
                post("/submit",rc.handleSubmit);
                post("/show",rc.handleSingleUserReimbursement);
                post("/showOther",rc.handleManagerSingleUserReimbursement);
                post("/showAll",rc.handleAllUsersReimbursement);
                put("/updateRequest", rc.handleUpdateRequest);
            });
        });

        server.exception(DuplicateUsernameException.class, (e,ctx) ->{
            ctx.result(e.getMessage());
        });
        server.exception(UserNotFoundException.class, (e,ctx) ->{
           ctx.status(401);
           ctx.result(e.getMessage());
        });
        server.exception(PasswordIncorrectException.class, (e,ctx) ->{
            ctx.status(401);
            ctx.result(e.getMessage());
        });
        server.exception(UsernameOrEmailIncorrectException.class, (e,ctx) -> {
            ctx.status(401);
            ctx.result(e.getMessage());
        });

        server.start(8000);
    }
}
