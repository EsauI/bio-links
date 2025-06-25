import { Card } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Share } from "@/components/share";
import { ViewsCounter } from "@/components/views-counter";
import { ModeToggle } from "@/components/mode-toggle";
import { EasterEgg } from "@/components/easter-egg";
import { SocialMedia } from "@/components/social-media";
import Link from "next/link";
import { SiSteam } from "@icons-pack/react-simple-icons";

export function ProfileCard() {
  return (
    <Card className="w-full max-w-md p-6 space-y-6">
      <div className="flex items-center justify-between">
        <Share />

        <ViewsCounter />

        <ModeToggle />
      </div>

      <div className="flex flex-col items-center space-y-2">
        <EasterEgg>
          <Avatar className="size-24">
            <AvatarImage
              src="https://github.com/EsauI.png"
              alt="Profile Picture"
            />

            <AvatarFallback>N</AvatarFallback>
          </Avatar>
        </EasterEgg>

        <div className="flex flex-col items-center">
          <h1 className="text-lg font-bold">Esaul</h1>
        </div>
      </div>

      <div className="space-y-2">
        <Button asChild className="w-full" variant="outline">
          <Link href="https://steamcommunity.com/id/0x7368/" target="_blank">
            <SiSteam />
            Steam
          </Link>
        </Button>
      </div>

      <SocialMedia />
    </Card>
  );
}
