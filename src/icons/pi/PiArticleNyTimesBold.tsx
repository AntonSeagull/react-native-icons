

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const PiArticleNyTimesBold = (props: IconProps) => {

   const {
            size = 24,
            color = 'black'
        } = props;

    return (
      <Svg
        viewBox="0 0 256 256"
        width={size}
        height={size}
        fill="none"
      >
        <G fill={color}>
          <Path d="M156,92a12,12,0,0,1,12-12h64a12,12,0,0,1,0,24H168A12,12,0,0,1,156,92Zm76,28H168a12,12,0,0,0,0,24h64a12,12,0,0,0,0-24Zm0,40H80a12,12,0,0,0,0,24H232a12,12,0,0,0,0-24Zm0,40H80a12,12,0,0,0,0,24H232a12,12,0,0,0,0-24ZM96,144a12,12,0,0,0,0-24H92V68h24v4a12,12,0,0,0,24,0V56a12,12,0,0,0-12-12H32A12,12,0,0,0,20,56V72a12,12,0,0,0,24,0V68H68v52H64a12,12,0,0,0,0,24Z" />
        </G>
      </Svg>
    );
  }

