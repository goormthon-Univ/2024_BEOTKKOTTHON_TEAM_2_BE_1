import { ApiProperty } from "@nestjs/swagger";

export class PostUserDto{
    @ApiProperty()
    kakao_Id: string;
    @ApiProperty()
    user_Id: string;
    @ApiProperty()
    university_Name: string;
    @ApiProperty()
    fcm_Token?: string;
}