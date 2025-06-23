import http from 'node:path'

export function testPath(){
    const relPAthToResource = path.join('public', 'index.html')

    console.log('testPath: ',relPAthToResource)

}