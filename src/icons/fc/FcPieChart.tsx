

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const FcPieChart = (props: IconProps) => {

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
          <Path  fill="#00BCD4" d="M24,6C14.1,6,6,14.1,6,24s8.1,18,18,18c5.2,0,9.9-2.2,13.1-5.7L24,24V6z" />
          <Path  fill="#448AFF" d="M42,24c0-9.9-8.1-18-18-18v18H42z" />
          <Path  fill="#3F51B5" d="M24,24l13.1,12.3c3-3.2,4.9-7.5,4.9-12.3H24z" />
        </G>
      </Svg>
    );
  }

