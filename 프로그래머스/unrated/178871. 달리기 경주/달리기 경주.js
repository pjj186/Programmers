function solution(players, callings) {
    const keyPlayers = {}
    // keyPlayer의 key는 player value는 rank
    // keyRanks의 key는 rank value는 player
    const keyRanks = {}
    players.forEach((player,idx)=>{
        const rank = idx+1
        keyPlayers[player] = rank
        keyRanks[rank] = player
    })

    callings.forEach((calling)=>{
        // losePlayer는 calling된 선수의 바로 앞 순위인 플레이어
        const losePlayer = keyRanks[keyPlayers[calling] - 1]

        keyRanks[keyPlayers[calling]] = losePlayer // 호명된 선수 자리에 losePlayer가 들어감
        keyRanks[keyPlayers[losePlayer]] = calling // 앞서고 있었던 선수 (losePlayer) 자리에 호명된 선수가 들어감
        keyPlayers[calling] -= 1 // 호명된 선수의 순위는 1 증가
        keyPlayers[losePlayer] += 1 // 앞서고 있었던 선수 (losePlayer)의 순위는 1 낮아짐
    })

    return Object.values(keyRanks)
}