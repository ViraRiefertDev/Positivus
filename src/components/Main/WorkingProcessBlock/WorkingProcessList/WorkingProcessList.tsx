import {v4} from 'uuid';
import WorkingProcessItem from '../WorkingProcessItem/WorkingProcessItem';
import { BlockContainer } from './styles';
import ourWorkingProcessData from './ourWorkingProcessData';

function WorkingProcessList() {
  
  return (
    <BlockContainer>
      {ourWorkingProcessData.map(({ itemNumber, title, text }) => (
        <WorkingProcessItem key={v4()} itemNumber={itemNumber} title={title} text={text} />
      ))}
    </BlockContainer>
  );
}
export default WorkingProcessList;
