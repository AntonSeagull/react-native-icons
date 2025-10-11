

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TfiHome = (props: IconProps) => {

   const {
            size = 24,
            color = 'black',
            rotate = 0,
        } = props;

    return (
      <Svg
        viewBox="0 0 17 17"
        width={size}
        height={size}
        fill="none"
        transform={`rotate(${rotate}, 8.5, 8.5)`}
      >
        <G fill={color} stroke={color}>
          <Path  d="M14 16h-3v-6h-5v6h-3v-9h-1v10h13v-10h-1v9zM7 16v-5h3v5h-3zM16.796 6.473l-0.592 0.807-7.704-5.66-7.704 5.658-0.592-0.806 8.296-6.092 8.296 6.093z" />
        </G>
      </Svg>
    );
  }

