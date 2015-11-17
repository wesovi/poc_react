/**
 * Created by Ivan on 17/11/15.
 */

export function listOfTeams(){
    return(
    [
        {
            name:'Eastern Conference',
            players:[
                {
                    code: 'EAST001',
                    name:'Carmelo Anthony'
                },
                {
                    code: 'EAST002',
                    name:'LeBron James'
                },
                {
                    code: 'EAST003',
                    name:'Pau Gasol'
                },
                {
                    code: 'EAST004',
                    name:'John Wall'
                },
                {
                    code: 'EAST005',
                    name:'Kyle Lowry'
                }
            ]

        },
        {
            name:'Western Conference',
            players:[
                {
                    code: 'WEST001',
                    name:'Blake Griffin'
                },
                {
                    code: 'WEST002',
                    name:'Marc Gasol'
                },
                {
                    code: 'WEST003',
                    name:'Kobe Bryant'
                },
                {
                    code: 'WEST004',
                    name:'Anthony Davis'
                },
                {
                    code: 'WEST005',
                    name:'Stephen Curry'
                }
            ]

        }
    ]);
}