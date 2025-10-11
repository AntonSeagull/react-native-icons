

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const BiWindowClose = (props: IconProps) => {

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
          <Path  d="M20 3H4c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V5c0-1.103-.897-2-2-2zM4 19V7h16l.001 12H4z" />
          <Path  d="m15.707 10.707-1.414-1.414L12 11.586 9.707 9.293l-1.414 1.414L10.586 13l-2.293 2.293 1.414 1.414L12 14.414l2.293 2.293 1.414-1.414L13.414 13z" />
        </G>
      </Svg>
    );
  }

