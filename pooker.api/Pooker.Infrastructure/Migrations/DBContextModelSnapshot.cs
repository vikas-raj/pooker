﻿// <auto-generated />
using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using Pooker.Infrastructure.Data.Configuration;

namespace Pooker.Infrastructure.Migrations
{
    [DbContext(typeof(DBContext))]
    partial class DBContextModelSnapshot : ModelSnapshot
    {
        protected override void BuildModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("Relational:MaxIdentifierLength", 128)
                .HasAnnotation("ProductVersion", "5.0.7")
                .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

            modelBuilder.Entity("Pooker.Domain.Domain.Entity", b =>
                {
                    b.Property<int>("ID")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("CreatedBy")
                        .HasColumnType("nvarchar(255)");

                    b.Property<DateTimeOffset>("CreatedOn")
                        .HasColumnType("datetimeoffset");

                    b.Property<bool>("IsDeleted")
                        .HasColumnType("bit");

                    b.Property<string>("UpdatedBy")
                        .HasColumnType("nvarchar(255)");

                    b.Property<DateTimeOffset>("UpdatedOn")
                        .HasColumnType("datetimeoffset");

                    b.HasKey("ID");

                    b.ToTable("Entity");
                });

            modelBuilder.Entity("Pooker.Domain.Domain.Game", b =>
                {
                    b.HasBaseType("Pooker.Domain.Domain.Entity");

                    b.Property<bool>("AllowUserToChangeVote")
                        .HasColumnType("bit");

                    b.Property<string>("Description")
                        .HasColumnType("nvarchar(max)");

                    b.Property<bool>("IsAutoFlip")
                        .HasColumnType("bit");

                    b.Property<int>("MeinGame")
                        .HasColumnType("int");

                    b.Property<string>("Name")
                        .HasColumnType("nvarchar(max)");

                    b.Property<bool>("ShowVelocityToUser")
                        .HasColumnType("bit");

                    b.Property<int>("UserId")
                        .HasColumnType("int");

                    b.Property<int>("Velocity")
                        .HasColumnType("int");

                    b.HasIndex("UserId");

                    b.ToTable("Game");
                });

            modelBuilder.Entity("Pooker.Domain.Domain.GameBoard", b =>
                {
                    b.HasBaseType("Pooker.Domain.Domain.Entity");

                    b.Property<int>("UserId")
                        .HasColumnType("int");

                    b.Property<int>("UserStoryDetailId")
                        .HasColumnType("int");

                    b.Property<int>("storyPoint")
                        .HasColumnType("int");

                    b.HasIndex("UserId");

                    b.HasIndex("UserStoryDetailId");

                    b.ToTable("GameBoard");
                });

            modelBuilder.Entity("Pooker.Domain.Domain.User", b =>
                {
                    b.HasBaseType("Pooker.Domain.Domain.Entity");

                    b.Property<string>("Email")
                        .HasColumnType("nvarchar(450)");

                    b.Property<string>("Password")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Username")
                        .HasColumnType("nvarchar(max)");

                    b.HasIndex("Email")
                        .IsUnique()
                        .HasFilter("[Email] IS NOT NULL");

                    b.ToTable("User");
                });

            modelBuilder.Entity("Pooker.Domain.Domain.UserStoryDetail", b =>
                {
                    b.HasBaseType("Pooker.Domain.Domain.Entity");

                    b.Property<int>("GameId")
                        .HasColumnType("int");

                    b.Property<string>("StoryName")
                        .HasColumnType("nvarchar(max)");

                    b.Property<int>("StoryPoint")
                        .HasColumnType("int");

                    b.HasIndex("GameId");

                    b.ToTable("UserStoryDetail");
                });

            modelBuilder.Entity("Pooker.Domain.Domain.Game", b =>
                {
                    b.HasOne("Pooker.Domain.Domain.Entity", null)
                        .WithOne()
                        .HasForeignKey("Pooker.Domain.Domain.Game", "ID")
                        .OnDelete(DeleteBehavior.ClientCascade)
                        .IsRequired();

                    b.HasOne("Pooker.Domain.Domain.User", "User")
                        .WithMany("Games")
                        .HasForeignKey("UserId")
                        .HasConstraintName("FK_Game_User")
                        .OnDelete(DeleteBehavior.Restrict)
                        .IsRequired();

                    b.Navigation("User");
                });

            modelBuilder.Entity("Pooker.Domain.Domain.GameBoard", b =>
                {
                    b.HasOne("Pooker.Domain.Domain.Entity", null)
                        .WithOne()
                        .HasForeignKey("Pooker.Domain.Domain.GameBoard", "ID")
                        .OnDelete(DeleteBehavior.ClientCascade)
                        .IsRequired();

                    b.HasOne("Pooker.Domain.Domain.User", "User")
                        .WithMany("GameBoards")
                        .HasForeignKey("UserId")
                        .HasConstraintName("FK_GameBoard_User")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("Pooker.Domain.Domain.UserStoryDetail", "UserStoryDetail")
                        .WithMany("GameBoards")
                        .HasForeignKey("UserStoryDetailId")
                        .HasConstraintName("FK_GameBoard_UserStoryDetail")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("User");

                    b.Navigation("UserStoryDetail");
                });

            modelBuilder.Entity("Pooker.Domain.Domain.User", b =>
                {
                    b.HasOne("Pooker.Domain.Domain.Entity", null)
                        .WithOne()
                        .HasForeignKey("Pooker.Domain.Domain.User", "ID")
                        .OnDelete(DeleteBehavior.ClientCascade)
                        .IsRequired();
                });

            modelBuilder.Entity("Pooker.Domain.Domain.UserStoryDetail", b =>
                {
                    b.HasOne("Pooker.Domain.Domain.Game", "Game")
                        .WithMany("UserStoryDetails")
                        .HasForeignKey("GameId")
                        .HasConstraintName("FK_UserStoryDetail_Game")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("Pooker.Domain.Domain.Entity", null)
                        .WithOne()
                        .HasForeignKey("Pooker.Domain.Domain.UserStoryDetail", "ID")
                        .OnDelete(DeleteBehavior.ClientCascade)
                        .IsRequired();

                    b.Navigation("Game");
                });

            modelBuilder.Entity("Pooker.Domain.Domain.Game", b =>
                {
                    b.Navigation("UserStoryDetails");
                });

            modelBuilder.Entity("Pooker.Domain.Domain.User", b =>
                {
                    b.Navigation("GameBoards");

                    b.Navigation("Games");
                });

            modelBuilder.Entity("Pooker.Domain.Domain.UserStoryDetail", b =>
                {
                    b.Navigation("GameBoards");
                });
#pragma warning restore 612, 618
        }
    }
}
