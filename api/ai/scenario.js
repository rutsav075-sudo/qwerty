export default function handler(req, res) {
  res.status(200).json({
    success: true,
    totalTokens: 1250,
    totalCost: 0.0045,
    totalLatency: 2500,
    agentsUsed: 4
  });
}
