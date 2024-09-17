"use client";

import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts";
import { ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";

import { ChartConfig, ChartContainer } from "@/components/ui/chart";
import { PredictChart } from "@/types/predict";

interface Props {
  chartData: PredictChart[];
}

export default function ResultChart({ chartData }: Props) {
  const chartConfig = {
    probability: {
      label: "Prob",
      color: "hsl(var(--primary))",
    },
  } satisfies ChartConfig;

  return (
    <ChartContainer config={chartConfig} className="min-h-[100px] w-full">
      <BarChart accessibilityLayer data={chartData}>
        <CartesianGrid vertical={false} />
        <XAxis
          dataKey="class"
          tickLine={false}
          tickMargin={10}
          axisLine={false}
        />
        <YAxis
          label={{
            value: "Probabilidad (%)",
            angle: -90,
            position: "insideLeft",
          }}
          tickLine={false}
          axisLine={false}
          tickFormatter={(value) => `${value * 100}%`}
        />
        <ChartTooltip content={<ChartTooltipContent />} />
        <Bar dataKey="probability" fill="var(--color-probability)" radius={4} />
      </BarChart>
    </ChartContainer>
  );
}
