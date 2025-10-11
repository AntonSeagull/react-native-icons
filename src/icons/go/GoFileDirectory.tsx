

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const GoFileDirectory = (props: IconProps) => {

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
          <Path  d="M2 4.75C2 3.784 2.784 3 3.75 3h4.971c.58 0 1.12.286 1.447.765l1.404 2.063c.046.069.124.11.207.11h8.471c.966 0 1.75.783 1.75 1.75V19.25A1.75 1.75 0 0 1 20.25 21H3.75A1.75 1.75 0 0 1 2 19.25Zm1.75-.25a.25.25 0 0 0-.25.25v14.5c0 .138.112.25.25.25h16.5a.25.25 0 0 0 .25-.25V7.687a.25.25 0 0 0-.25-.25h-8.471a1.75 1.75 0 0 1-1.447-.765L8.928 4.61a.252.252 0 0 0-.208-.11Z" />
        </G>
      </Svg>
    );
  }

