

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const FcHeadset = (props: IconProps) => {

   const {
            size = 24,
            color = 'black',
            rotate = 0,
        } = props;

    return (
      <Svg
        viewBox="0 0 48 48"
        width={size}
        height={size}
        fill="none"
        transform={`rotate(${rotate}, 24, 24)`}
      >
        <G fill={color} stroke={color}>
          <Path  fill="#0097A7" d="M24,5C14.1,5,6,13.1,6,23v15h4V23c0-7.7,6.3-14,14-14s14,6.3,14,14v15h4V23C42,13.1,33.9,5,24,5z" />
          <Path  fill="#37474F" d="M38,43h-4V31h4c2.2,0,4,1.8,4,4v4C42,41.2,40.2,43,38,43z" />
          <Path  fill="#37474F" d="M10,43h4V31h-4c-2.2,0-4,1.8-4,4v4C6,41.2,7.8,43,10,43z" />
        </G>
      </Svg>
    );
  }

