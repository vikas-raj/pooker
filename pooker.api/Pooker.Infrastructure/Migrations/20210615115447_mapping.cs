using Microsoft.EntityFrameworkCore.Migrations;

namespace Pooker.Infrastructure.Migrations
{
    public partial class mapping : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Game",
                columns: table => new
                {
                    ID = table.Column<int>(type: "int", nullable: false),
                    Velocity = table.Column<int>(type: "int", nullable: false),
                    Name = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Description = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    ShowVelocityToUser = table.Column<bool>(type: "bit", nullable: false),
                    MeinGame = table.Column<int>(type: "int", nullable: false),
                    IsAutoFlip = table.Column<bool>(type: "bit", nullable: false),
                    AllowUserToChangeVote = table.Column<bool>(type: "bit", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Game", x => x.ID);
                    table.ForeignKey(
                        name: "FK_Game_Entity_ID",
                        column: x => x.ID,
                        principalTable: "Entity",
                        principalColumn: "ID",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "UserStoryDetail",
                columns: table => new
                {
                    ID = table.Column<int>(type: "int", nullable: false),
                    StoryPoint = table.Column<int>(type: "int", nullable: false),
                    StoryName = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    GameId = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_UserStoryDetail", x => x.ID);
                    table.ForeignKey(
                        name: "FK_UserStoryDetail_Entity_ID",
                        column: x => x.ID,
                        principalTable: "Entity",
                        principalColumn: "ID",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_UserStoryDetail_Game",
                        column: x => x.GameId,
                        principalTable: "Game",
                        principalColumn: "ID",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "GameBoard",
                columns: table => new
                {
                    ID = table.Column<int>(type: "int", nullable: false),
                    storyPoint = table.Column<int>(type: "int", nullable: false),
                    UserStoryDetailId = table.Column<int>(type: "int", nullable: false),
                    UserId = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_GameBoard", x => x.ID);
                    table.ForeignKey(
                        name: "FK_GameBoard_Entity_ID",
                        column: x => x.ID,
                        principalTable: "Entity",
                        principalColumn: "ID",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_GameBoard_User",
                        column: x => x.UserId,
                        principalTable: "User",
                        principalColumn: "ID",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_GameBoard_UserStoryDetail",
                        column: x => x.UserStoryDetailId,
                        principalTable: "UserStoryDetail",
                        principalColumn: "ID",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_GameBoard_UserId",
                table: "GameBoard",
                column: "UserId");

            migrationBuilder.CreateIndex(
                name: "IX_GameBoard_UserStoryDetailId",
                table: "GameBoard",
                column: "UserStoryDetailId");

            migrationBuilder.CreateIndex(
                name: "IX_UserStoryDetail_GameId",
                table: "UserStoryDetail",
                column: "GameId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "GameBoard");

            migrationBuilder.DropTable(
                name: "UserStoryDetail");

            migrationBuilder.DropTable(
                name: "Game");
        }
    }
}
