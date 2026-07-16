export default function handler(req, res) {
  res.status(200).json({
    success: true,
    totalTokens: 850,
    totalCost: 0.0031,
    totalLatency: 1800,
    agentsUsed: 2
  });
}
