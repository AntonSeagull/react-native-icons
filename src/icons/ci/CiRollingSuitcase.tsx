

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const CiRollingSuitcase = (props: IconProps) => {

   const {
            size = 24,
            color = 'black',
            rotate = 0,
        } = props;

    return (
      <Svg
        viewBox="0 0 24 24"
        width={size}
        height={size}
        fill="none"
        transform={`rotate(${rotate}, 12, 12)`}
      >
        <G fill={color} stroke={color}>
          <Path  d="M16.25,7.49H15V3.56a1.5,1.5,0,0,0-1.5-1.5h-3A1.511,1.511,0,0,0,9,3.56V7.49H7.75a2.5,2.5,0,0,0-2.5,2.5v8.44a2.5,2.5,0,0,0,2.5,2.5h.5v.01a1,1,0,0,0,2,0v-.01h3.5v.01a1,1,0,0,0,2,0v-.01h.5a2.5,2.5,0,0,0,2.5-2.5V9.99A2.5,2.5,0,0,0,16.25,7.49ZM10,3.56a.508.508,0,0,1,.5-.5h3a.5.5,0,0,1,.5.5V7.5H10Zm7.75,14.87a1.5,1.5,0,0,1-1.5,1.5H7.75a1.5,1.5,0,0,1-1.5-1.5V9.99a1.511,1.511,0,0,1,1.5-1.5h8.5a1.5,1.5,0,0,1,1.5,1.5Z" />
        </G>
      </Svg>
    );
  }

