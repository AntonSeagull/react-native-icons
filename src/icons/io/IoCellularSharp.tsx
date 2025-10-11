

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const IoCellularSharp = (props: IconProps) => {

   const {
            size = 24,
            color = 'black'
        } = props;

    return (
      <Svg
        viewBox="0 0 512 512"
        width={size}
        height={size}
        fill="none"
      >
        <G fill={color}>
          <Path d="M496,432H400V80h96Z" />
          <Path d="M368,432H272V160h96Z" />
          <Path d="M240,432H144V224h96Z" />
          <Path d="M112,432H16V288h96Z" />
        </G>
      </Svg>
    );
  }

