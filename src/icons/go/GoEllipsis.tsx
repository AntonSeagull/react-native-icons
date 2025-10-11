

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const GoEllipsis = (props: IconProps) => {

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
          <Path  d="M22 9.75v5.5A1.75 1.75 0 0 1 20.25 17H3.75A1.75 1.75 0 0 1 2 15.25v-5.5C2 8.784 2.784 8 3.75 8h16.5c.966 0 1.75.784 1.75 1.75Zm-8.75 2.75a1.25 1.25 0 1 0-2.5 0 1.25 1.25 0 0 0 2.5 0Zm-6.5 1.25a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5Zm10.5 0a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5Z" />
        </G>
      </Svg>
    );
  }

