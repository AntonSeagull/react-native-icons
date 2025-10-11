

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const CiAlignTop = (props: IconProps) => {

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
          <Path  d="M3.548,4.078h16.9a.5.5,0,0,0,0-1H3.548a.5.5,0,0,0,0,1Z" />
          <Path  d="M9,20.922H6.565a2.5,2.5,0,0,1-2.5-2.5V7.582a2.5,2.5,0,0,1,2.5-2.5H9a2.5,2.5,0,0,1,2.5,2.5v10.84A2.5,2.5,0,0,1,9,20.922ZM6.565,6.082a1.5,1.5,0,0,0-1.5,1.5v10.84a1.5,1.5,0,0,0,1.5,1.5H9a1.5,1.5,0,0,0,1.5-1.5V7.582A1.5,1.5,0,0,0,9,6.082Z" />
          <Path  d="M17.438,15.951H15a2.5,2.5,0,0,1-2.5-2.5V7.582a2.5,2.5,0,0,1,2.5-2.5h2.435a2.5,2.5,0,0,1,2.5,2.5v5.869A2.5,2.5,0,0,1,17.438,15.951ZM15,6.082a1.5,1.5,0,0,0-1.5,1.5v5.869a1.5,1.5,0,0,0,1.5,1.5h2.435a1.5,1.5,0,0,0,1.5-1.5V7.582a1.5,1.5,0,0,0-1.5-1.5Z" />
        </G>
      </Svg>
    );
  }

