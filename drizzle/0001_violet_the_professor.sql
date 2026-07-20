CREATE TABLE "message" (
	"message_id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"message_content" varchar(300) NOT NULL,
	"messager_id" text NOT NULL
);
--> statement-breakpoint
ALTER TABLE "message" ADD CONSTRAINT "message_messager_id_user_id_fk" FOREIGN KEY ("messager_id") REFERENCES "public"."user"("id") ON DELETE no action ON UPDATE no action;