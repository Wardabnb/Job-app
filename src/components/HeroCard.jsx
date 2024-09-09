"use client"

export default function HeroCard({ card }) {
	return (
		<div className="flex gap-4 bg-white p-3 rounded-lg">
			<div className="p-5 bg-[#E7F0FA]">{card.icon}</div>
			<div>
				<div className="font-semibold">{card.number}</div>
				<div className="text-gray-500">{card.title}</div>
			</div>
		</div>
	)
}
