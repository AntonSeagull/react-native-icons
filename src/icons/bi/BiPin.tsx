

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const BiPin = (props: IconProps) => {

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
          <Path  d="m12 22 1-2v-3h5a1 1 0 0 0 1-1v-1.586c0-.526-.214-1.042-.586-1.414L17 11.586V8a1 1 0 0 0 1-1V4c0-1.103-.897-2-2-2H8c-1.103 0-2 .897-2 2v3a1 1 0 0 0 1 1v3.586L5.586 13A2.01 2.01 0 0 0 5 14.414V16a1 1 0 0 0 1 1h5v3l1 2zM8 4h8v2H8V4zM7 14.414l1.707-1.707A.996.996 0 0 0 9 12V8h6v4c0 .266.105.52.293.707L17 14.414V15H7v-.586z" />
        </G>
      </Svg>
    );
  }

