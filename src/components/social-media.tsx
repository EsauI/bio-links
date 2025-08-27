import {
  TooltipProvider,
  Tooltip,
  TooltipTrigger,
  TooltipContent,
} from "@/components/ui/tooltip";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  SiMastodon,
  SiTiktok,
  SiInstagram,
  SiDiscord,
} from "@icons-pack/react-simple-icons";

export function SocialMedia() {
  return (
    <div className="flex items-center justify-center space-x-2">
      <TooltipProvider>
        <div>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="ghost" size="icon">
                <Link href="https://tiktok.com/@esajez" target="_blank">
                  <SiTiktok />
                </Link>
              </Button>
            </TooltipTrigger>

            <TooltipContent>
              <p>TikTok</p>
            </TooltipContent>
          </Tooltip>
        </div>

        <div>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="ghost" size="icon">
                <Link href="https://mastodon.social/@Esaul" target="_blank">
                  <SiMastodon />
                </Link>
              </Button>
            </TooltipTrigger>

            <TooltipContent>
              <p>Mastodon</p>
            </TooltipContent>
          </Tooltip>
        </div>

        <div>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="ghost" size="icon">
                <Link href="https://www.instagram.com/esajez" target="_blank">
                  <SiInstagram />
                </Link>
              </Button>
            </TooltipTrigger>

            <TooltipContent>
              <p>Instagram</p>
            </TooltipContent>
          </Tooltip>
        </div>

        <div>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="ghost" size="icon">
                <Link href="https://discord.gg/KzSMkUwpYA" target="_blank">
                  <SiDiscord />
                </Link>
              </Button>
            </TooltipTrigger>

            <TooltipContent>
              <p>Discord</p>
            </TooltipContent>
          </Tooltip>
        </div>
      </TooltipProvider>
    </div>
  );
}
