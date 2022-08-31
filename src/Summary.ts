import { MatchData } from './MatchData';
import { WinsAnalysis } from './analyzers/WinsAnalysis';
import { HtmlReport } from './reportTarget/HtmlReport';


export interface Analyzer {
    run(matches: MatchData[]): string;
};

export interface OutputTarget {
    print(report: string): void;
};

export class Summary {
    static winsAnalusisWithHtmlReport(team: string): Summary {
        return new Summary(
            new WinsAnalysis(team),
            new HtmlReport('report.html')
        )
        
    }
    constructor(public analyzer: Analyzer, public outputTarget: OutputTarget) {}

    buildAndPrintReport(matches: MatchData[]): void {
        const output = this.analyzer.run(matches);
        this.outputTarget.print(output);
    }
}
