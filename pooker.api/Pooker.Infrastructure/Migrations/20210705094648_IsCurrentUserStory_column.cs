using Microsoft.EntityFrameworkCore.Migrations;

namespace Pooker.Infrastructure.Migrations
{
    public partial class IsCurrentUserStory_column : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "storyPoint",
                table: "GameBoard",
                newName: "StoryPoint");

            migrationBuilder.AlterColumn<int>(
                name: "StoryPoint",
                table: "UserStoryDetail",
                type: "int",
                nullable: true,
                oldClrType: typeof(int),
                oldType: "int");

            migrationBuilder.AddColumn<bool>(
                name: "IsCurrentUserStory",
                table: "UserStoryDetail",
                type: "bit",
                nullable: false,
                defaultValue: false);

            migrationBuilder.AddColumn<bool>(
                name: "IsUserStoryActive",
                table: "UserStoryDetail",
                type: "bit",
                nullable: false,
                defaultValue: false);

            migrationBuilder.AlterColumn<int>(
                name: "StoryPoint",
                table: "GameBoard",
                type: "int",
                nullable: true,
                oldClrType: typeof(int),
                oldType: "int");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "IsCurrentUserStory",
                table: "UserStoryDetail");

            migrationBuilder.DropColumn(
                name: "IsUserStoryActive",
                table: "UserStoryDetail");

            migrationBuilder.RenameColumn(
                name: "StoryPoint",
                table: "GameBoard",
                newName: "storyPoint");

            migrationBuilder.AlterColumn<int>(
                name: "StoryPoint",
                table: "UserStoryDetail",
                type: "int",
                nullable: false,
                defaultValue: 0,
                oldClrType: typeof(int),
                oldType: "int",
                oldNullable: true);

            migrationBuilder.AlterColumn<int>(
                name: "storyPoint",
                table: "GameBoard",
                type: "int",
                nullable: false,
                defaultValue: 0,
                oldClrType: typeof(int),
                oldType: "int",
                oldNullable: true);
        }
    }
}
