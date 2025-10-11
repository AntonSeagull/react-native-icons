

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const MdRuleFolder = (props: IconProps) => {

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
          <Path  d="M20,6h-8l-2-2H4C2.9,4,2.01,4.9,2.01,6L2,18c0,1.1,0.9,2,2,2h16c1.1,0,2-0.9,2-2V8C22,6.9,21.1,6,20,6z M7.83,16L5,13.17 l1.41-1.41l1.41,1.41l3.54-3.54l1.41,1.41L7.83,16z M17.41,13L19,14.59L17.59,16L16,14.41L14.41,16L13,14.59L14.59,13L13,11.41 L14.41,10L16,11.59L17.59,10L19,11.41L17.41,13z" />
        </G>
      </Svg>
    );
  }

