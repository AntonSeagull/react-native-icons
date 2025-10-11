

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbCircleDottedLetterN = (props: IconProps) => {

   const {
            size = 24,
            color = 'black'
        } = props;

    return (
      <Svg
        viewBox="0 0 24 24"
        width={size}
        height={size}
        fill="none"
      >
        <G fill={color}>
          <Path d="M10 16v-8l4 8v-8" />
          <Path d="M7.5 4.21v.01" />
          <Path d="M4.21 7.5v.01" />
          <Path d="M3 12v.01" />
          <Path d="M4.21 16.5v.01" />
          <Path d="M7.5 19.79v.01" />
          <Path d="M12 21v.01" />
          <Path d="M16.5 19.79v.01" />
          <Path d="M19.79 16.5v.01" />
          <Path d="M21 12v.01" />
          <Path d="M19.79 7.5v.01" />
          <Path d="M16.5 4.21v.01" />
          <Path d="M12 3v.01" />
        </G>
      </Svg>
    );
  }

