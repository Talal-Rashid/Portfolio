<?php
header('Content-Type: application/json');

// Sample data to mimic the actual data from web scraping
$matches = [
    [
        'title' => 'Match 1: Team A vs Team B',
        'score' => 'Team A: 250/7 (50) - Team B: 200/5 (40)'
    ],
    [
        'title' => 'Match 2: Team C vs Team D',
        'score' => 'Team C: 300/8 (50) - Team D: 270/9 (50)'
    ]
];

echo json_encode(['matches' => $matches]);
?>
