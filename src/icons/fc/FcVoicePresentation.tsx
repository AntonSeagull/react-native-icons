

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const FcVoicePresentation = (props: IconProps) => {

   const {
            size = 24,
            color = 'black'
        } = props;

    return (
      <Svg
        viewBox="0 0 48 48"
        width={size}
        height={size}
        fill="none"
      >
        <G fill={color}>
          <Path d="M40,22h-8l-4,4V12c0-2.2,1.8-4,4-4h8c2.2,0,4,1.8,4,4v6C44,20.2,42.2,22,40,22z" fill="#2196F3" />
          <Path d="M30,36.7c0,0-3.6-6.7-13-6.7S4,36.7,4,36.7V40h26V36.7z" fill="#607D8B" />
        </G>
      </Svg>
    );
  }

