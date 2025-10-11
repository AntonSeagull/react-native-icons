

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TfiLayoutColumn4 = (props: IconProps) => {

   const {
            size = 24,
            color = 'black'
        } = props;

    return (
      <Svg
        viewBox="0 0 17 17"
        width={size}
        height={size}
        fill="none"
      >
        <G fill={color}>
          <Path d="M1 17h3v-17h-3v17zM2 1h1v15h-1v-15zM5 17h3v-17h-3v17zM6 1h1v15h-1v-15zM9 17h3v-17h-3v17zM10 1h1v15h-1v-15zM13 0v17h3v-17h-3zM15 16h-1v-15h1v15z" fill="#000000" />
        </G>
      </Svg>
    );
  }

