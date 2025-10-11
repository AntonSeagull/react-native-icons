

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const GoMoveToStart = (props: IconProps) => {

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
          <Path  d="M12.78 18.78a.749.749 0 0 1-1.06 0l-6.25-6.25a.749.749 0 0 1 0-1.06l6.25-6.25a.749.749 0 1 1 1.06 1.06l-4.969 4.97H22.25a.75.75 0 0 1 0 1.5H7.811l4.969 4.97a.749.749 0 0 1 0 1.06ZM2.75 3.75a.75.75 0 0 1 .75.75v15a.75.75 0 0 1-1.5 0v-15a.75.75 0 0 1 .75-.75Z" />
        </G>
      </Svg>
    );
  }

