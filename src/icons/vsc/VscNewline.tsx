

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const VscNewline = (props: IconProps) => {

   const {
            size = 24,
            color = 'black',
            rotate = 0,
        } = props;

    return (
      <Svg
        viewBox="0 0 16 16"
        width={size}
        height={size}
        fill="none"
        transform={`rotate(${rotate}, 8, 8)`}
      >
        <G fill={color} stroke={color}>
          <Path  d="M12 5.5V7.484C12 7.61661 11.9473 7.74379 11.8535 7.83755C11.7598 7.93132 11.6326 7.984 11.5 7.984H4.618L6.251 6.351L5.544 5.644L3.423 7.765L3 8.188V8.756L5.544 11.3L6.251 10.593L4.641 8.984H11.5C11.8978 8.984 12.2793 8.82597 12.5607 8.54466C12.842 8.26336 13 7.88182 13 7.484V5.5H12Z" fillRule="evenodd" clipRule="evenodd" />
        </G>
      </Svg>
    );
  }

