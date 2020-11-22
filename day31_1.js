// day 31_1
// 후보키

function solution(relation) {
    const cols = relation[0].length
    const rows = relation.length
    const sets = 1 << cols
    const sk = new Set()

    for (let i=1; i<sets; i++) {
        const tmp = new Set()
        for (let row=0; row<rows; row++) {
            let key = ''
            for (let col=0; col<cols; col++) {
                if (i & (1 << col)) key = String(key) + String(relation[row][col])
            }
            tmp.add(key)
        }
        if (tmp.size === rows) sk.add(i)
    }

    for (let i of sk) {
        for (let j of sk) {
            if (i >= j) continue
            if ((i & j) === i) sk.delete(j)
        }
    }
    return sk.size
}