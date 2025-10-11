

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const MdOutlineBatterySaver = (props: IconProps) => {

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
          <Path  d="M0,0h24v24H0V0z" fill="none" />
          <Path  d="M16,4h-2V2h-4v2H8C7.45,4,7,4.45,7,5v16c0,0.55,0.45,1,1,1h8c0.55,0,1-0.45,1-1V5C17,4.45,16.55,4,16,4z M15,14h-2v2h-2 v-2H9v-2h2v-2h2v2h2V14z" />
        </G>
      </Svg>
    );
  }

