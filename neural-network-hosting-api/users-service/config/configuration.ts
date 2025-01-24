import { TypeOrmModuleOptions } from "@nestjs/typeorm";
import { User } from "src/users/entities/user.entity";

interface Config {
    database: TypeOrmModuleOptions
}

export const configuration = (): Config => ({
    database: {
        type: "postgres",
        host: process.env.DATABASE_HOST,
        port: process.env.DATABASE_PORT,
        username: process.env.DATABASE_USER,
        password: process.env.DATABASE_PASSWORD,
        database: process.env.DATABASE_NAME,
        entities: [User],
        synchronize: true,
    }
})
