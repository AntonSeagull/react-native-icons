

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TiArchive = (props: IconProps) => {

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
          <Path d="M13 12h-3c-.276 0-.5.224-.5.5s.224.5.5.5h3c.276 0 .5-.224.5-.5s-.224-.5-.5-.5zM20 5h-17c-.553 0-1 .448-1 1s.447 1 1 1h17c.553 0 1-.448 1-1s-.447-1-1-1zM18 8h-13c-.553 0-1 .448-1 1v8c0 1.654 1.346 3 3 3h9c1.654 0 3-1.346 3-3v-8c0-.552-.447-1-1-1zm-2 10h-9c-.552 0-1-.449-1-1v-7h11v7c0 .551-.448 1-1 1z" />
        </G>
      </Svg>
    );
  }

