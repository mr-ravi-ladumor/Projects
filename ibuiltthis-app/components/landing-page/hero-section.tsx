import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { SparklesIcon, ArrowRightIcon, Rocket, RocketIcon, UserIcon, EyeIcon } from "lucide-react";
import StatsCard from "@/components/landing-page/stats-card";

const LiveBadge = () => {
    return (
        <Badge variant={"outline"} className="px-4 py-2 mb-8 text-sm backdrop-blur-sm">
            <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"/>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"/>
            </span>
            Join thousands of creators sharing their work
        </Badge>
    );
}

const statsData = [
    {
        icon : RocketIcon, value : "5.2k+", label: "Projects Shared"
    },
    {
        icon : UserIcon, value : "10k+", label: "Active Creators", hasBorder: true
    },
    {
        icon : EyeIcon, value : "50k+", label: " Monthly Visitors"
    }
]

export default function HeroSection() {
    return (
        <section className="relative overflow-hidden bg-linear-to-b from-background via-background to-muted/20">
            <div className="wrapper">
                <div className="flex flex-col items-center
                justify-center lg:py-24 py-12 text-center ">
                    <LiveBadge />
                    <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight mb-6 max-w-5xl"> Share What You've Built, Discover What's Launching</h1>
                    <p className="text-lg sm:text-xl text-muted-foreground mb-10 max-w-2xl leading-relaxed">
                        A community platform for creators to showcase their apps, AI
                        tools, SaaS products, and creative projects. Authentic
                        launches, real builders, genuine feedback.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 mb-16">
                        <Button asChild size="lg" className="text-base px-8 shadow-lg">
                            <Link href="/submit">
                            <SparklesIcon className="size-5"></SparklesIcon>
                            Share Your Project</Link>
                        </Button>
                        <Button asChild size="lg" variant="secondary" className="text-base px-8 shadow-lg">
                            <Link href="/submit">
                            Explore Projects <ArrowRightIcon className="size-5"></ArrowRightIcon>
                            </Link>
                        </Button>
                    </div>
                    {/* Stats Section */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-12 w-full max-w-2xl">
                        {statsData.map((stat) => (
                            <StatsCard key={stat.label} {...stat} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
