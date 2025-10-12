

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const GrUsbKey = (props: IconProps) => {

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
          <Path  d="M3 6C1.34315 6 0 7.34315 0 9V14C0 15.6569 1.34315 17 3 17H16H17V16H23H24V15V8V7H23H17V6H16H3ZM17 9V14H22V9H17ZM15 15V8H3C2.44772 8 2 8.44772 2 9V14C2 14.5523 2.44772 15 3 15H15ZM19 11.0078H19.5H19.51H20.01V10.5078V10.4978V9.99781H19.51H19.5H19V10.4978V10.5078V11.0078ZM19.51 13.0078H19.01V12.5078V12.4978V11.9978H19.51H19.52H20.02V12.4978V12.5078V13.0078H19.52H19.51Z" fillRule="evenodd" clipRule="evenodd" />
        </G>
      </Svg>
    );
  }

